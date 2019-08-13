//8.6 afternoon
package com.itlize.newIndividual2.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itlize.newIndividual2.dao.FeatureDAO;
import com.itlize.newIndividual2.dao.ResourceDAO;
import com.itlize.newIndividual2.domain.Data;
import com.itlize.newIndividual2.domain.Feature;
import com.itlize.newIndividual2.domain.FeatureValue;
import com.itlize.newIndividual2.domain.Resource;
import com.itlize.newIndividual2.service.AppService;
import com.itlize.newIndividual2.service.FeatureService;
import com.itlize.newIndividual2.service.FeatureValueService;
import com.itlize.newIndividual2.service.ResourceService;

@Service
@Transactional
public class AppServiceImpl implements AppService {

	@Autowired
	ResourceDAO resourceDAO;
	@Autowired
	FeatureDAO featureDAO;
	@Autowired
	ResourceService resourceService;
	@Autowired
	FeatureService featureService;
	@Autowired
	FeatureValueService featureValueService;

	// Add
	@Override
	public Data saveDataToProject(Data data) {
		Data savedData = new Data();
		savedData.setProjectId(data.getProjectId());
		Resource resource = new Resource(data.getResource().getCode(), data.getResource().getName(),
				data.getProjectId());
		savedData.setResource(resourceService.saveResourceForProject(resource, data.getProjectId()));
		List<Feature> feature_list = data.getFeatures();
		for (Feature feature : feature_list) {
			// user existed feature and add responding value to Value tabel
			featureValueService.saveValueOfFeature(feature.getContent(), data.getProjectId(), resource.getId(),
					feature.getId());
		}
		return savedData;
	}

	// Get
	@Override
	public List<Data> generateRows(int projectId) {
		List<Resource> resources = resourceService.getResourcesByProjectId(projectId);
		List<Feature> features = featureService.getFeatruesByProjectId(projectId);
		List<Data> rst = new ArrayList<>();
		for (Resource resource : resources) {
			int resourceId = resource.getId();
			List<Feature> newFeatureList = new ArrayList<>();
			for (Feature feature : features) {
				int featureId = feature.getId();
				FeatureValue featureVal = featureValueService.getFeatureValuesByThreeId(projectId, resourceId,
						featureId);
				if (featureVal == null) {
					feature.setContent(null);
				} else {
					String val = featureVal.getValue();
					feature.setContent(val);
				}
				Feature newFeature = new Feature();
				newFeature.setId(feature.getId());
				newFeature.setName(feature.getName());
				newFeature.setProjectId(feature.getProjectId());
				newFeature.setType(feature.getType());
				newFeature.setContent(feature.getContent());
				newFeatureList.add(newFeature);
			}
			Data data = new Data(projectId, resource, newFeatureList);
			rst.add(data);
		}
		return rst;
	}

	// Update
	@Override
	public Data updateRow(Data data) {
		Data updatedData = new Data();
		Resource resource = data.getResource();
		updatedData.setResource(resourceService.updateResourceOfProject(resource));
		List<Feature> feature_list = data.getFeatures();
		for (Feature feature : feature_list) {
			updatedData.getFeatures().add(featureService.updateFeatureOfProject(feature));
			featureValueService.updateFeatureValue(feature.getContent(), data.getProjectId(), resource.getId(),
					feature.getId());
		}
		return updatedData;
	}

}
