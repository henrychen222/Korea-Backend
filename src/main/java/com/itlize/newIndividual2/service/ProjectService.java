//7.26 on road back
package com.itlize.newIndividual2.service;

import com.itlize.newIndividual2.domain.Project;

public interface ProjectService {

	public Project saveProject(Project project);

	public Iterable<Project> getProjectList();

	public Project getProjectById(int id);

	public Project updateProject(Project project);

}
