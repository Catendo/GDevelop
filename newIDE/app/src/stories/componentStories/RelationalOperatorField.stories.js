// @flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../PaperDecorator';

import { testProject } from '../GDevelopJsInitializerDecorator';

import RelationalOperatorField from '../../EventsSheet/ParameterFields/RelationalOperatorField';
import ValueStateHolder from '../ValueStateHolder';

const gd: libGDevelop = global.gd;

export default {
  title: 'ParameterFields/RelationalOperatorField',
  component: RelationalOperatorField,
  decorators: [paperDecorator],
};

export const RelationalOperatorFieldString = () => (
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
      <RelationalOperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project.getObjectsContainer()}
        objectsContainer={testProject.testLayout.getObjectsContainer()}
        projectScopedContainersAccessor={
          testProject.testSceneProjectScopedContainersAccessor
        }
        parameterMetadata={
          testProject.stringRelationalOperatorParameterMetadata
        }
      />
    )}
  />
);
export const RelationalOperatorFieldNumber = () => (
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
      <RelationalOperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project.getObjectsContainer()}
        objectsContainer={testProject.testLayout.getObjectsContainer()}
        projectScopedContainersAccessor={
          testProject.testSceneProjectScopedContainersAccessor
        }
        parameterMetadata={
          testProject.numberRelationalOperatorParameterMetadata
        }
      />
    )}
  />
);
export const RelationalOperatorFieldColor = () => (
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
      <RelationalOperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project.getObjectsContainer()}
        objectsContainer={testProject.testLayout.getObjectsContainer()}
        projectScopedContainersAccessor={
          testProject.testSceneProjectScopedContainersAccessor
        }
        parameterMetadata={testProject.colorRelationalOperatorParameterMetadata}
      />
    )}
  />
);
export const RelationalOperatorFieldUnknownType = () => (
  <ValueStateHolder
    initialValue=""
    render={(value, onChange) => (
      <RelationalOperatorField
        scope={{ project: testProject.project }}
        value={value}
        onChange={onChange}
        globalObjectsContainer={testProject.project.getObjectsContainer()}
        projectScopedContainersAccessor={
          testProject.testSceneProjectScopedContainersAccessor
        }
        objectsContainer={testProject.testLayout.getObjectsContainer()}
        parameterMetadata={
          testProject.unknownRelationalOperatorParameterMetadata
        }
      />
    )}
  />
);
