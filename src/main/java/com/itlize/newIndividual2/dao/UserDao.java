package com.itlize.newIndividual2.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itlize.newIndividual2.domain.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

	User findByUsername(String userName);  //findBy<...>   ... should be the same as domain get and set method same
	
	User findByEmail(String userEmail);
    
	

   
}
