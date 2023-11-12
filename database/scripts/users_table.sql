USE `casa_deseada`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
	`user_id` int(11) NOT NULL AUTO_INCREMENT,
	`dni` varchar(10) NOT NULL,
	`first_name` varchar(150) NOT NULL,
	`last_name` varchar(150) NOT NULL,
	`phone_number` varchar(10) NOT NULL,
	`email` varchar(50) NOT NULL,
	`password` varchar(60) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`user_id`),
	UNIQUE KEY `dni` (`dni`),
	UNIQUE KEY `phone_number` (`phone_number`),
	UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;