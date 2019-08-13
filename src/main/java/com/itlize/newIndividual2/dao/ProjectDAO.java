//7.26 afternoon
package com.itlize.newIndividual2.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.itlize.newIndividual2.domain.Project;

public interface ProjectDAO extends CrudRepository<Project, Integer>, JpaRepository<Project, Integer> {

	Project findById(int id);

	Project findByName(String name);

	@Query("SELECT CASE WHEN COUNT(p) > 0 THEN 'true' ELSE 'false' END FROM Project p WHERE p.name = ?1")
	boolean existsByName(String name);

}
