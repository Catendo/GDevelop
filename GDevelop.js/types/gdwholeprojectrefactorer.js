// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdWholeProjectRefactorer {
  static computeChangesetForVariablesContainer(oldSerializedVariablesContainer: gdSerializerElement, newVariablesContainer: gdVariablesContainer): gdVariablesChangeset;
  static applyRefactoringForVariablesContainer(project: gdProject, newVariablesContainer: gdVariablesContainer, changeset: gdVariablesChangeset): void;
  static renameEventsFunctionsExtension(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, oldName: string, newName: string): void;
  static updateExtensionNameInEventsBasedBehavior(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior, sourceExtensionName: string): void;
  static renameEventsFunction(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, oldName: string, newName: string): void;
  static renameBehaviorEventsFunction(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior, oldName: string, newName: string): void;
  static renameObjectEventsFunction(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedObject: gdEventsBasedObject, oldName: string, newName: string): void;
  static moveEventsFunctionParameter(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, functionName: string, oldIndex: number, newIndex: number): void;
  static moveBehaviorEventsFunctionParameter(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior, functionName: string, oldIndex: number, newIndex: number): void;
  static moveObjectEventsFunctionParameter(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedObject: gdEventsBasedObject, functionName: string, oldIndex: number, newIndex: number): void;
  static renameEventsBasedBehaviorProperty(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior, oldName: string, newName: string): void;
  static renameEventsBasedBehaviorSharedProperty(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior, oldName: string, newName: string): void;
  static renameEventsBasedObjectProperty(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedObject: gdEventsBasedObject, oldName: string, newName: string): void;
  static renameEventsBasedBehavior(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, oldName: string, newName: string): void;
  static renameEventsBasedObject(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, oldName: string, newName: string): void;
  static renameLayout(project: gdProject, oldName: string, newName: string): void;
  static renameExternalLayout(project: gdProject, oldName: string, newName: string): void;
  static renameExternalEvents(project: gdProject, oldName: string, newName: string): void;
  static renameLayer(project: gdProject, layout: gdLayout, oldName: string, newName: string): void;
  static renameLayerEffect(project: gdProject, layout: gdLayout, layer: gdLayer, oldName: string, newName: string): void;
  static renameObjectAnimation(project: gdProject, layout: gdLayout, gdObject: gdObject, oldName: string, newName: string): void;
  static renameObjectPoint(project: gdProject, layout: gdLayout, gdObject: gdObject, oldName: string, newName: string): void;
  static renameObjectEffect(project: gdProject, layout: gdLayout, gdObject: gdObject, oldName: string, newName: string): void;
  static objectOrGroupRenamedInLayout(project: gdProject, layout: gdLayout, oldName: string, newName: string, isObjectGroup: boolean): void;
  static objectOrGroupRemovedInLayout(project: gdProject, layout: gdLayout, objectName: string, isObjectGroup: boolean, removeEventsAndGroups: boolean): void;
  static objectOrGroupRenamedInEventsFunction(project: gdProject, eventsFunction: gdEventsFunction, globalObjectsContainer: gdObjectsContainer, objectsContainer: gdObjectsContainer, oldName: string, newName: string, isObjectGroup: boolean): void;
  static objectOrGroupRemovedInEventsFunction(project: gdProject, eventsFunction: gdEventsFunction, globalObjectsContainer: gdObjectsContainer, objectsContainer: gdObjectsContainer, objectName: string, isObjectGroup: boolean, removeEventsAndGroups: boolean): void;
  static objectOrGroupRenamedInEventsBasedObject(project: gdProject, globalObjectsContainer: gdObjectsContainer, eventsBasedObject: gdEventsBasedObject, oldName: string, newName: string, isObjectGroup: boolean): void;
  static objectOrGroupRemovedInEventsBasedObject(project: gdProject, eventsBasedObject: gdEventsBasedObject, globalObjectsContainer: gdObjectsContainer, objectsContainer: gdObjectsContainer, objectName: string, isObjectGroup: boolean, removeEventsAndGroups: boolean): void;
  static globalObjectOrGroupRenamed(project: gdProject, oldName: string, newName: string, isObjectGroup: boolean): void;
  static globalObjectOrGroupRemoved(project: gdProject, objectName: string, isObjectGroup: boolean, removeEventsAndGroups: boolean): void;
  static getAllObjectTypesUsingEventsBasedBehavior(project: gdProject, eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior): gdSetString;
  static ensureBehaviorEventsFunctionsProperParameters(eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedBehavior: gdEventsBasedBehavior): void;
  static ensureObjectEventsFunctionsProperParameters(eventsFunctionsExtension: gdEventsFunctionsExtension, eventsBasedObject: gdEventsBasedObject): void;
  static addBehaviorAndRequiredBehaviors(project: gdProject, obj: gdObject, behaviorType: string, behaviorName: string): void;
  static addRequiredBehaviorsFor(project: gdProject, obj: gdObject, behaviorName: string): void;
  static findDependentBehaviorNames(project: gdProject, obj: gdObject, behaviorName: string): gdVectorString;
  static findInvalidRequiredBehaviorProperties(project: gdProject): gdVectorUnfilledRequiredBehaviorPropertyProblem;
  static getBehaviorsWithType(obj: gdObject, type: string): gdVectorString;
  static fixInvalidRequiredBehaviorProperties(project: gdProject): boolean;
  static removeLayer(project: gdProject, layout: gdLayout, layerName: string): void;
  static mergeLayers(project: gdProject, layout: gdLayout, originLayerName: string, targetLayerName: string): void;
  static getLayoutAndExternalLayoutLayerInstancesCount(project: gdProject, layout: gdLayout, layerName: string): number;
  delete(): void;
  ptr: number;
};