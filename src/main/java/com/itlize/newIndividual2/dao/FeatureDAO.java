//7.30 morning on road
package com.itlize.newIndividual2.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.itlize.newIndividual2.domain.Feature;

public interface FeatureDAO extends CrudRepository<Feature, Integer>, JpaRepository<Feature, Integer> {

	public Feature findById(int id);

	public Feature findByName(String name);

	public List<Feature> findByProjectId(int projectId);

	@Query("SELECT CASE WHEN COUNT(f) > 0 THEN 'true' ELSE 'false' END FROM Feature f WHERE f.name = ?1 AND f.projectId = ?2")
	boolean existsByNameForProject(String name, int projectId);

}
