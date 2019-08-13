//7.30 morning on road
package com.itlize.newIndividual2.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Feature")
public class Feature {
	
	public Feature() {
	}
	
	public Feature(String name, String type, String content, int projectId) {
		this.name = name;
		this.type = type;
		this.content = content;
		this.projectId = projectId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String type;
	
	@Column
	private String content;
	
	@Column(name = "project_id")
	private int projectId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Feature [id=" + id + ", name=" + name + ", type=" + type + ", content=" + content + ", projectId="
				+ projectId + "]";
	}

}

