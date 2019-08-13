package com.itlize.newIndividual2.service;

import java.util.List;

import com.itlize.newIndividual2.domain.User;

public interface UserService {

	public List<User> getAll();

	public User getUserByUserName(String userName, String password);

	public User createUser(User user);

}
