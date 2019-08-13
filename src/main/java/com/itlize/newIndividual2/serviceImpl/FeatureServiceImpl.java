//7.30 afternoon
package com.itlize.newIndividual2.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itlize.newIndividual2.dao.FeatureDAO;
import com.itlize.newIndividual2.domain.Feature;
import com.itlize.newIndividual2.exception.InfoConflictException;
import com.itlize.newIndividual2.service.FeatureService;

@Service
@Transactional
public class FeatureServiceImpl implements FeatureService {

	@Autowired
	FeatureDAO featureDAO;

	@Override
	public Feature saveFeatureForProject(Feature feature, int projectId) {
		if (featureDAO.existsByNameForProject(feature.getName(), projectId)) {
			throw new InfoConflictException("Feature " + feature.getName() + " for the project");
		}
		featureDAO.save(feature);
		return feature;
	}

	@Override
	public Feature getFeatureById(int id) {
		return featureDAO.findById(id);
	}

	@Override
	public List<Feature> getFeatruesByProjectId(int projectId) {
		return featureDAO.findByProjectId(projectId);
	}

	@Override
	public Feature updateFeatureOfProject(Feature feature) {
		Feature featureToUpdate = featureDAO.getOne(feature.getId());
		if (!featureToUpdate.getName().equals(feature.getName())
				&& featureDAO.existsByNameForProject(feature.getName(), feature.getProjectId())) {
			throw new InfoConflictException("Feature name of the project");
		}
		featureToUpdate.setName(feature.getName());
		featureToUpdate.setType(feature.getType());
		featureToUpdate.setContent(feature.getContent());
		return featureDAO.save(featureToUpdate);
	}

}
