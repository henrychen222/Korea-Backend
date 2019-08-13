package com.itlize.newIndividual2.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itlize.newIndividual2.dao.FeatureValueDAO;
import com.itlize.newIndividual2.domain.FeatureValue;
import com.itlize.newIndividual2.service.FeatureValueService;

@Service
@Transactional
public class FeatureValueServiceImpl implements FeatureValueService {

	@Autowired
	FeatureValueDAO featureValueDAO;

	@Override
	public FeatureValue saveValueOfFeature(FeatureValue featureValue) {
		return featureValueDAO.save(featureValue);
	}

	@Override
	public FeatureValue saveValueOfFeature(String value, int projectId, int resourceId, int featureId) {
		FeatureValue obj = new FeatureValue();
		obj.setValue(value);
		obj.setProjectId(projectId);
		obj.setResourceId(resourceId);
		obj.setFeatureId(featureId);
		return saveValueOfFeature(obj);
	}

	@Override
	public FeatureValue getFeatureValueById(int id) {
		return featureValueDAO.findById(id);
	}

	@Override
	public List<FeatureValue> getFeatureValuesByProjectId(int projectId) {
		return featureValueDAO.findByProjectId(projectId);
	}

	@Override
	public FeatureValue getFeatureValuesByThreeId(int projectId, int resourceId, int featureId) {
		FeatureValue value = featureValueDAO.findByProIdResIdFeaId(projectId, resourceId, featureId);
		return value;
	}

	@Override
	public FeatureValue updateFeatureValue(String newVal, int projectId, int resourceId, int featureId) {
		FeatureValue featureValueToUpdate = featureValueDAO.findByProIdResIdFeaId(projectId, resourceId, featureId);
		featureValueToUpdate.setValue(newVal);
		return featureValueDAO.save(featureValueToUpdate);
	}

}
