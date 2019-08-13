package com.itlize.newIndividual2.domain;

import java.util.ArrayList;
import java.util.List;

public class Data {

	private int projectId;
	private Resource resource;
	private List<Feature> features;

	public Data() {
		super();
		this.features = new ArrayList<Feature>();
	}

	public Data(int projectId, Resource resource) {
		super();
		this.projectId = projectId;
		this.resource = resource;
		this.features = new ArrayList<Feature>();
	}

	public Data(int projectId, Resource resource, List<Feature> features) {
		super();
		this.projectId = projectId;
		this.resource = resource;
		this.features = features;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public Resource getResource() {
		return resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	public List<Feature> getFeatures() {
		return features;
	}

	public void setFeatures(List<Feature> features) {
		this.features = features;
	}

	@Override
	public String toString() {
		return "Data [projectId=" + projectId + ", resource=" + resource + ", features=" + features + "]";
	}

}
