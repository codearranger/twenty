import { Module } from '@nestjs/common';

import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';

import { ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { ServerlessFunctionModule } from 'src/engine/metadata-modules/serverless-function/serverless-function.module';
import { WorkflowQueryHookModule } from 'src/modules/workflow/common/query-hooks/workflow-query-hook.module';
import { WorkflowCommonWorkspaceService } from 'src/modules/workflow/common/workspace-services/workflow-common.workspace-service';
import { WorkflowVersionStepWorkspaceService } from 'src/modules/workflow/common/workspace-services/workflow-version-step.workspace-service';
import { WorkflowBuilderModule } from 'src/modules/workflow/workflow-builder/workflow-builder.module';

@Module({
  imports: [
    WorkflowQueryHookModule,
    WorkflowBuilderModule,
    ServerlessFunctionModule,
    NestjsQueryTypeOrmModule.forFeature([ObjectMetadataEntity], 'metadata'),
  ],
  providers: [
    WorkflowCommonWorkspaceService,
    WorkflowVersionStepWorkspaceService,
  ],
  exports: [
    WorkflowCommonWorkspaceService,
    WorkflowVersionStepWorkspaceService,
  ],
})
export class WorkflowCommonModule {}
