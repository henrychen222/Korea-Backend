package com.itlize.newIndividual2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itlize.newIndividual2.domain.Project;
import com.itlize.newIndividual2.service.ProjectService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

	@Autowired
	ProjectService projectService;

	//work
	@RequestMapping(value = "/saveProject", method = RequestMethod.POST)
	public Project saveProject(@RequestBody Project project) {
		return projectService.saveProject(project);
	}

	//work
	@RequestMapping(value = "/getProject/{id}", method = RequestMethod.GET)
	public Project getProjectById(@PathVariable("id") Project project) {
		return projectService.getProjectById(project.getId());
	}
    
	//work
	@RequestMapping(value = "/getAllProjects", method = RequestMethod.GET)
	public Iterable<Project> getAllProjects() {
		Iterable<Project> list = projectService.getProjectList();
		return list;
	}

	//work
	@RequestMapping(value = "/updateProject", method = RequestMethod.PUT)
	public Project updateProject(@RequestBody Project project) {
		return projectService.updateProject(project);
	}
}
