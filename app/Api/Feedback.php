<?php

namespace App\Api;

use App\Service\Mailer;

class Feedback extends \Core\Api
{
	public function methodSend($args)
	{
		echo 1;
		return ['test' => 'ok'];
	}
}
