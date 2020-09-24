CREATE TABLE `article_list` (
  `article_id` bigint(255) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `article_title` text NOT NULL COMMENT '文章标题',
  `article_content` longtext NOT NULL COMMENT '文章内容',
  `user_id` int(11) NOT NULL COMMENT '发布用户ID',
  `article_publish_time` timestamp DEFAULT NULL COMMENT '发布时间',
  `article_view_num` int(20) NOT NULL COMMENT '浏览量',
  `article_like_num` int(20) NOT NULL COMMENT '点赞量',
  `article_comment_num` int(20) NOT NULL COMMENT '评论数',
  `article_last_modified_time` timestamp DEFAULT NULL,
  PRIMARY KEY (`article_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;