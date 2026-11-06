<?php
/**
 * OPTIONAL cPanel alternative to Web3Forms.
 *
 * Use this only if you host on cPanel and prefer not to use Web3Forms.
 * 1. Upload this file to public_html/contact-handler.php
 * 2. In src/pages/contact.astro change the form action to "/contact-handler.php"
 *    (and remove the fetch() script block, or keep it: this file also answers JSON).
 * 3. Create the mailbox below in cPanel so the "From" address is on your own domain
 *    (this helps delivery and avoids spam folders).
 */

$TO        = 'info@proservwashingmachinerepairs.co.za';
$FROM      = 'website@proservwashingmachinerepairs.co.za'; // [CONFIRM] create this mailbox in cPanel
$THANK_YOU = 'https://proservwashingmachinerepairs.co.za/thank-you/';
$CONTACT   = 'https://proservwashingmachinerepairs.co.za/contact/';

$wantsJson = isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;

function respond($ok, $msg, $wantsJson, $redirect) {
    if ($wantsJson) {
        header('Content-Type: application/json');
        http_response_code($ok ? 200 : 400);
        echo json_encode(['success' => $ok, 'message' => $msg]);
    } else {
        header('Location: ' . $redirect, true, 303);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed', $wantsJson, $CONTACT);
}

// Honeypot: bots tick the hidden checkbox. Pretend success.
if (!empty($_POST['botcheck'])) {
    respond(true, 'OK', $wantsJson, $THANK_YOU);
}

function clean($key, $max = 500) {
    $v = isset($_POST[$key]) ? trim((string) $_POST[$key]) : '';
    $v = str_replace(["\r", "\n"], ' ', $v); // prevents header injection
    return mb_substr(strip_tags($v), 0, $max);
}

$name      = clean('name', 100);
$phone     = clean('phone', 40);
$area      = clean('area', 60);
$brand     = clean('brand', 60);
$preferred = clean('preferred_day_time', 100);
$problem   = isset($_POST['problem']) ? mb_substr(strip_tags(trim((string) $_POST['problem'])), 0, 2000) : '';

if ($name === '' || $phone === '' || $area === '' || $brand === '' || $problem === '') {
    respond(false, 'Please fill in all required fields.', $wantsJson, $CONTACT);
}
if (!preg_match('/^[0-9 +()\-]{9,}$/', $phone)) {
    respond(false, 'Please enter a valid phone number.', $wantsJson, $CONTACT);
}

$subject = 'New washing machine repair request: ' . $area . ' (' . $brand . ')';
$body  = "New repair request from the website\n\n";
$body .= "Name: $name\nPhone: $phone\nArea: $area\nBrand: $brand\nPreferred day/time: $preferred\n\nProblem:\n$problem\n";

$headers  = "From: ProServ Website <$FROM>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . $FROM);

respond($sent, $sent ? 'OK' : 'Could not send. Please call us.', $wantsJson, $sent ? $THANK_YOU : $CONTACT);
