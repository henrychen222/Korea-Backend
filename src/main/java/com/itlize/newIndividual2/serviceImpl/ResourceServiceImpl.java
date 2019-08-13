//7.26 afternoon
package com.itlize.newIndividual2.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itlize.newIndividual2.dao.ResourceDAO;
import com.itlize.newIndividual2.domain.Resource;
import com.itlize.newIndividual2.exception.InfoConflictException;
import com.itlize.newIndividual2.service.ResourceService;

@Service
@Transactional
public class ResourceServiceImpl implements ResourceService {

	@Autowired
	ResourceDAO resourceDAO;

	@Override
	public Resource saveResourceForProject(Resource resource, int projectId) {
		if (resourceDAO.existsByCodeForProject(resource.getCode(), projectId)) {
			throw new InfoConflictException("Code " + resource.getCode() + " for the project ");
		}
		resourceDAO.save(resource);
		return resource;
	}

	@Override
	public List<Resource> getResourcesByProjectId(int projectId) {
		return resourceDAO.findByProjectId(projectId);
	}

	@Override
	public Resource getResourceById(int id) {
		return resourceDAO.findById(id);
	}

	@Override
	public Resource updateResourceOfProject(Resource resource) {
		Resource resourceToUpdate = resourceDAO.getOne(resource.getId());
		if (!resourceToUpdate.getCode().equals(resource.getCode())
				&& resourceDAO.existsByCodeForProject(resource.getCode(), resource.getProjectId())) {
			throw new InfoConflictException("Resource code of this project");
		}
		resourceToUpdate.setCode(resource.getCode());
		resourceToUpdate.setName(resource.getName());
		return resourceDAO.save(resourceToUpdate);
	}

}
