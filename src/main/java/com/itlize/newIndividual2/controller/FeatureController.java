package com.itlize.newIndividual2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itlize.newIndividual2.domain.Feature;
import com.itlize.newIndividual2.domain.Project;
import com.itlize.newIndividual2.service.FeatureService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000")
public class FeatureController {

	@Autowired
	FeatureService featureService;

	// work
	@RequestMapping(value = "/project/saveFeature", method = RequestMethod.POST)
	public Feature saveFeatureForProject(@RequestBody Feature feature) {
		System.out.println(feature);
		return featureService.saveFeatureForProject(feature, feature.getProjectId());
	}

//	// work use @RequestBody
//	@RequestMapping(value = "/getFeature/{id}", method = RequestMethod.GET)
//	public Feature getFeatureById(@RequestBody Feature feature) {
//		return featureService.getFeatureById(feature.getId());
//	}

	// work use @PathVariable
	@GetMapping("/getFeature/{id}")
	public Feature getFeatureById(@PathVariable("id") Feature feature) {
		return featureService.getFeatureById(feature.getId());
	}

	// No
	@RequestMapping(value = "/project/{projectId}/getAllFeatures", method = RequestMethod.GET)
	public List<Feature> getFeatruesByResIdProId(@PathVariable("projectId") Project project) {
		return featureService.getFeatruesByProjectId(project.getId());
	}

	// work
	@RequestMapping(value = "/updateFeature", method = RequestMethod.PUT)
	public Feature updateFeature(@RequestBody Feature feature) {
		return featureService.updateFeatureOfProject(feature);
	}

}
