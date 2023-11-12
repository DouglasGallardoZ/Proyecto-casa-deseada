USE `bqyqs8god8id9q92l0p5`;

DROP TABLE IF EXISTS `houses`;

CREATE TABLE `houses` (
	`house_id` int(11) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`square_meters` int(11) NOT NULL,
	`rooms_number` int(11) NOT NULL,
	`floors_number` int(11) NOT NULL,
	`bathrooms_number` int(11) NOT NULL,
	`price` double(10, 2) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`house_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;