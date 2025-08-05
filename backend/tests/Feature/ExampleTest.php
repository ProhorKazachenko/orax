<?php

namespace Tests\Feature;

/**
 * Basic application route test.
 */

test('the application returns a successful response', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
