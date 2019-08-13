//7.26 afternoon
package com.itlize.newIndividual2.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Resource")
public class Resource {

	public Resource() {
	}

	public Resource(String code, String name, int projectId) {
		this.code = code;
		this.name = name;
		this.projectId = projectId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column
	private String code;

	@Column
	private String name;

	@Column(name = "project_id")
	private int projectId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Resource [id=" + id + ", code=" + code + ", name=" + name + ", project_id=" + projectId + "]";
	}

}
