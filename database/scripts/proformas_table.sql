USE `bqyqs8god8id9q92l0p5`;

DROP TABLE IF EXISTS `proformas`;

CREATE TABLE `proformas` (
	`proforma_id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int(11) NOT NULL,
	`house_id` int(11) NOT NULL,
	`floor_type_id` int(11) NOT NULL,
	`door_type_id` int(11) NOT NULL,
	`faucet_type_id` int(11) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`proforma_id`),
	KEY `fk_proformas_user` (`user_id`),
	KEY `fk_proformas_house` (`house_id`),
	KEY `fk_proformas_floor_types` (`floor_type_id`),
	KEY `fk_proformas_door_types` (`door_type_id`),
	KEY `fk_proformas_faucet_types` (`faucet_type_id`),
	CONSTRAINT `fk_proformas_door_types` FOREIGN KEY (`door_type_id`) REFERENCES `door_types` (`door_type_id`),
	CONSTRAINT `fk_proformas_faucet_types` FOREIGN KEY (`faucet_type_id`) REFERENCES `faucet_types` (`faucet_type_id`),
	CONSTRAINT `fk_proformas_floor_types` FOREIGN KEY (`floor_type_id`) REFERENCES `floor_types` (`floor_type_id`),
	CONSTRAINT `fk_proformas_house` FOREIGN KEY (`house_id`) REFERENCES `houses` (`house_id`),
	CONSTRAINT `fk_proformas_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB CHARSET = utf8;