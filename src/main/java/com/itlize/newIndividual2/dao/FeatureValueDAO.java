package com.itlize.newIndividual2.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.itlize.newIndividual2.domain.FeatureValue;

public interface FeatureValueDAO extends CrudRepository<FeatureValue, Integer>, JpaRepository<FeatureValue, Integer> {

	FeatureValue findById(int id);

	List<FeatureValue> findByProjectId(int projectId);

	@Query("SELECT CASE WHEN COUNT(f) > 0 THEN 'true' ELSE 'false' END FROM FeatureValue f WHERE f.projectId = ?1 AND f.resourceId = ?2 AND f.featureId = ?3")
	boolean existsByValue(int projectId, int resourceId, int featureId);

	@Query("SELECT u FROM FeatureValue u WHERE u.projectId = ?1 AND u.resourceId = ?2 AND u.featureId = ?3")
	FeatureValue findByProIdResIdFeaId(int projectId, int resourceId, int featureId);
}
