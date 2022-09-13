drop database if exists DB_Subjects;
create database DB_Subjects;

use DB_Subjects;

drop table if exists SITE;
create table SITE(
	id_site					varchar(16)		not null	primary key,
    site_name				varchar(32)		not null	unique
);

drop table if exists FACULTY;
create table FACULTY(
	id_faculty				varchar(16)		not null	primary key,
    faculty_name			varchar(64)		not null,
    id_site 				varchar(16)		not null,
    foreign key(id_site) references SITE(id_site)
);

drop table if exists COURSE;
create table COURSE(
	id_course				varchar(16)		not null	primary key,
    course_name				varchar(64)		not null,
    description_course		varchar(256)	not null,
    id_faculty 				varchar(16)		not null,
    foreign key(id_faculty) references FACULTY(id_faculty)
);

drop table if exists CAREER;
create table CAREER(
	id_career				varchar(16)		not null	primary key,
    career_name				varchar(64)		not null,
    id_faculty 				varchar(16)		not null,
    foreign key(id_faculty) references FACULTY(id_faculty)
);