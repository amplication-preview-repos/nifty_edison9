import { Module } from "@nestjs/common";
import { KafkaPermissionInteractionsService } from "./kafkapermissioninteractions.service";
import { KafkaPermissionInteractionsController } from "./kafkapermissioninteractions.controller";
import { KafkaPermissionInteractionsResolver } from "./kafkapermissioninteractions.resolver";

@Module({
  controllers: [KafkaPermissionInteractionsController],
  providers: [KafkaPermissionInteractionsService, KafkaPermissionInteractionsResolver],
  exports: [KafkaPermissionInteractionsService],
})
export class KafkaPermissionInteractionsModule {}
