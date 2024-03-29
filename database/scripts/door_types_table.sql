USE `casa_deseada`;

DROP TABLE IF EXISTS `door_types`;

CREATE TABLE `door_types` (
	`door_type_id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`price` double(5, 2) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`door_type_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;