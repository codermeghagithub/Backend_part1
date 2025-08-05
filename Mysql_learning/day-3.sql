
create database techdb;
use techdb;


create table tech(
  id int primary key auto_increment,
  name VARCHAR(50) not null,
  category varchar(50) not null,
  release_year int check (release_year>=1990),
  website varchar(100) UNIQUE,
  create_at TIMESTAMP DEFAULT current_timestamp
)

insert into tech(name,category,release_year,website)
VALUES
('React', 'Frontend', 2013, 'https://reactjs.org'),
('Node.js', 'Backend', 2009, 'https://nodejs.org'),
('MySQL', 'Database', 1995, 'https://mysql.com');

CREATE TABLE frameworks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tech_id INT,
    framework_name VARCHAR(50) NOT NULL,
    version VARCHAR(10) DEFAULT '1.0',
    CONSTRAINT fk_tech FOREIGN KEY (tech_id)
        REFERENCES tech(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert frameworks
INSERT INTO frameworks (tech_id, framework_name, version)
VALUES
(1, 'Next.js', '13'),
(2, 'Express.js', '4'),
(3, 'InnoDB', '1.0');

insert into framework(tech_id,framework_name,version)


select * from tech;

set AUTO_INCREMENT=0;

insert into tech(name,category,release_year,website)
VALUES ('Vue.js', 'Frontend', 2014, 'https://vuejs.org');
INSERT INTO tech (name, category, release_year, website)
VALUES ('Angular', 'Frontend', 2010, 'https://angular.io');
commit;

delete from tech where id=2;
-- by mistake delete another value so how to get again that previous value=>use rollback
rollback 