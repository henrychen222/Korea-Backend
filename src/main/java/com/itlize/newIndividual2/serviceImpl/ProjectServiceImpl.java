// 7.26 back on road
package com.itlize.newIndividual2.serviceImpl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itlize.newIndividual2.dao.ProjectDAO;
import com.itlize.newIndividual2.domain.Project;
import com.itlize.newIndividual2.exception.InfoConflictException;
import com.itlize.newIndividual2.service.ProjectService;

@Service
@Transactional
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	ProjectDAO projectDAO;

	@Override
	public Project saveProject(Project project) {
		if (projectDAO.existsByName(project.getName())) {
			throw new InfoConflictException("Project");
		}
		projectDAO.save(project);
		return project;
	}

	public Iterable<Project> getProjectList() {
		Iterable<Project> list = projectDAO.findAll();
		return list;
	}

	@Override
	public Project getProjectById(int id) {
		return projectDAO.findById(id);
	}

	@Override
	public Project updateProject(Project project) {
		Project projectToUpdate = projectDAO.getOne(project.getId());
		if (projectDAO.existsByName(project.getName())) {
			throw new InfoConflictException("Project name");
		}
		projectToUpdate.setName(project.getName());
		return projectDAO.save(projectToUpdate);
	}

}
