// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdProjectScopedContainers {
  static makeNewProjectScopedContainersForProjectAndLayout(project: gdProject, layout: gdLayout): gdProjectScopedContainers;
  static makeNewProjectScopedContainersForFreeEventsFunction(project: gdProject, eventsFunctionsContainer: gdEventsFunctionsContainer, eventsFunction: gdEventsFunction, parameterObjectsContainer: gdObjectsContainer): gdProjectScopedContainers;
  static makeNewProjectScopedContainersForBehaviorEventsFunction(project: gdProject, eventsBasedBehavior: gdEventsBasedBehavior, eventsFunction: gdEventsFunction, parameterObjectsContainer: gdObjectsContainer): gdProjectScopedContainers;
  static makeNewProjectScopedContainersForObjectEventsFunction(project: gdProject, eventsBasedObject: gdEventsBasedObject, eventsFunction: gdEventsFunction, parameterObjectsContainer: gdObjectsContainer): gdProjectScopedContainers;
  static makeNewProjectScopedContainersWithLocalVariables(projectScopedContainers: gdProjectScopedContainers, event: gdBaseEvent): gdProjectScopedContainers;
  addPropertiesContainer(propertiesContainer: gdPropertiesContainer): gdProjectScopedContainers;
  addParameters(parameters: gdVectorParameterMetadata): gdProjectScopedContainers;
  getObjectsContainersList(): gdObjectsContainersList;
  getVariablesContainersList(): gdVariablesContainersList;
  delete(): void;
  ptr: number;
};