package com.itlize.newIndividual2.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itlize.newIndividual2.dao.UserDao;
import com.itlize.newIndividual2.domain.User;
import com.itlize.newIndividual2.exception.NotFoundException;
import com.itlize.newIndividual2.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;

	@Override
	public List<User> getAll() {
		List<User> users = userDao.findAll();
		return users;
	}

	@Override
	public User getUserByUserName(String userName, String password) {
		User user = userDao.findByUsername(userName);
		if (user != null && password.equals(user.getPassword())) {
			return user;
		}
		return null;
	}

	@Override
	public User createUser(User user) {
		User createUser = userDao.findByUsername(user.getUsername()); // here use JpaRepository

		if (createUser != null) {
			throw new NotFoundException("User with name " + user.getUsername() + " exists");
		}

		createUser = userDao.findByEmail(user.getEmail());

		if (createUser != null) {
			throw new NotFoundException("User with email " + user.getEmail() + " exists");
		}

		User createdUser = userDao.save(user);

		System.out.println("User created successful!");
		return createdUser;
	}
}
