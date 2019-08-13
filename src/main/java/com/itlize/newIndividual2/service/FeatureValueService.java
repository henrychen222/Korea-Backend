package com.itlize.newIndividual2.service;

import java.util.List;

import com.itlize.newIndividual2.domain.FeatureValue;

public interface FeatureValueService {

	public FeatureValue saveValueOfFeature(FeatureValue featureValue);

	public FeatureValue saveValueOfFeature(String value, int projectId, int resourceId, int featureId);

	public FeatureValue getFeatureValueById(int id);

	public List<FeatureValue> getFeatureValuesByProjectId(int projectId);

	public FeatureValue getFeatureValuesByThreeId(int projectId, int resourceId, int featureId);

	public FeatureValue updateFeatureValue(String newVal, int projectId, int resourceId, int featureId);

}
