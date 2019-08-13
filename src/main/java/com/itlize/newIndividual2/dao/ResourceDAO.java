//7.26 afternoon
package com.itlize.newIndividual2.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.itlize.newIndividual2.domain.Resource;

public interface ResourceDAO extends CrudRepository<Resource, Integer>, JpaRepository<Resource, Integer> {

	List<Resource> findByProjectId(int projectId);

	Resource findById(int id);

	@Query("SELECT CASE WHEN COUNT(r) > 0 THEN 'true' ELSE 'false' END FROM Resource r WHERE r.code = ?1 AND r.projectId = ?2")
	boolean existsByCodeForProject(String code, int projectId);

}
