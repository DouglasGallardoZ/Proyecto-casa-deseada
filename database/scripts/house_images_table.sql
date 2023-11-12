USE `bqyqs8god8id9q92l0p5`;

DROP TABLE IF EXISTS `house_images`;

CREATE TABLE `house_images` (
	`image_id` int(11) NOT NULL AUTO_INCREMENT,
	`image_url` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`house_id` int(11) NOT NULL,
	PRIMARY KEY (`image_id`),
	KEY `fk_house_images_houses` (`house_id`),
	CONSTRAINT `fk_house_images_houses` FOREIGN KEY (`house_id`) REFERENCES `houses` (`house_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;