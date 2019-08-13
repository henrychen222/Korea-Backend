//7.30 afternoon
package com.itlize.newIndividual2.service;

import java.util.List;

import com.itlize.newIndividual2.domain.Feature;

public interface FeatureService {

	public Feature saveFeatureForProject(Feature feature, int projectId);

	public List<Feature> getFeatruesByProjectId(int projectId);

	public Feature getFeatureById(int id);

	public Feature updateFeatureOfProject(Feature feature);

}
