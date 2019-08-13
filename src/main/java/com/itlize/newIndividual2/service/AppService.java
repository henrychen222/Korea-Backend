//8.6 afternoon
package com.itlize.newIndividual2.service;

import java.util.List;

import com.itlize.newIndividual2.domain.Data;

public interface AppService {

	public Data saveDataToProject(Data data);

	public List<Data> generateRows(int projectId);

	public Data updateRow(Data data);

}
