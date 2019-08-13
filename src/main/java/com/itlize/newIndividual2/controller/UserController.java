package com.itlize.newIndividual2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itlize.newIndividual2.domain.User;
import com.itlize.newIndividual2.exception.UnauthorizedException;
import com.itlize.newIndividual2.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<User> getAllUsers() {
		List<User> users = userService.getAll();
		return users;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public User login(@RequestBody User inputUser) throws Exception {
		String userName = inputUser.getUsername();
		String password = inputUser.getPassword();

		System.out.println(userName);
		System.out.println(password);

		User user = userService.getUserByUserName(userName, password);

		if (user == null) {
			throw new UnauthorizedException("user doesn't exist");
		}
		return user;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public User register(@RequestBody User inputUser) {
		User createdUser = userService.createUser(inputUser);
		return createdUser;
	}
}
