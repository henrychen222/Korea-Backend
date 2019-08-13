//7.26 afternoon
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
import com.itlize.newIndividual2.domain.Resource;
import com.itlize.newIndividual2.service.ResourceService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController {

	@Autowired
	ResourceService resourceService;

	//work---add resource, POST
	@RequestMapping(value = "/project/saveResource")
	public Resource saveResourceForProject(@RequestBody Resource resource) {
		return resourceService.saveResourceForProject(resource, resource.getProjectId());
	}
    
	//work
	@RequestMapping(value = "/resource", method = RequestMethod.POST)
	public Resource getResourceById(@RequestBody Resource resource) {
		return resourceService.getResourceById(resource.getId());
	}

	//empty collection
	@RequestMapping(value = "/project/{projectId}/resources", method = RequestMethod.GET)
	public Iterable<Resource> getResourcesByProjectId(@PathVariable("projectId") Project project) {
		return resourceService.getResourcesByProjectId(project.getId());
	}

	//work
	@RequestMapping(value = "/updateResource", method = RequestMethod.PUT)
	public Resource updateResource(@RequestBody Resource resource) {
		return resourceService.updateResourceOfProject(resource);
	}

}
