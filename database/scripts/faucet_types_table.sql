USE `bqyqs8god8id9q92l0p5`;

DROP TABLE IF EXISTS `faucet_types`;

CREATE TABLE `faucet_types` (
	`faucet_type_id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`price` double(5, 2) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`faucet_type_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;