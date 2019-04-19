<?php

return [
    'driver' => env('MAIL_DRIVER', 'mailgun'),
    'host' => env('MAIL_HOST', 'smtp.gmail.com'),
    'port' => env('MAIL_PORT', 465),
    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'jogajuntoapp@gmail.com'),
        'name' => env('MAIL_FROM_NAME', 'Joga Junto'),
    ],
    'encryption' => env('MAIL_ENCRYPTION', 'ssl'),
    'username' => env('jogajuntoapp@gmail.com'),
    'password' => env('trsOqB73PRO9'),
    'sendmail' => '/usr/sbin/sendmail -bs',
    'markdown' => [
        'theme' => 'default',

        'paths' => [
            resource_path('views/vendor/mail'),
        ],
    ],
    'log_channel' => env('MAIL_LOG_CHANNEL'),
    'pretend' => true,
];
