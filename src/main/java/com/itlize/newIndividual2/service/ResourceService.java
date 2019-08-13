//7.26 afternoon
package com.itlize.newIndividual2.service;

import java.util.List;

import com.itlize.newIndividual2.domain.Resource;

public interface ResourceService {

	Resource saveResourceForProject(Resource resource, int projectId);

	List<Resource> getResourcesByProjectId(int projectId);

	Resource getResourceById(int id);

	Resource updateResourceOfProject(Resource resource);

}
