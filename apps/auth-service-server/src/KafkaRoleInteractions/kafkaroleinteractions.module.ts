import { Module } from "@nestjs/common";
import { KafkaRoleInteractionsService } from "./kafkaroleinteractions.service";
import { KafkaRoleInteractionsController } from "./kafkaroleinteractions.controller";
import { KafkaRoleInteractionsResolver } from "./kafkaroleinteractions.resolver";

@Module({
  controllers: [KafkaRoleInteractionsController],
  providers: [KafkaRoleInteractionsService, KafkaRoleInteractionsResolver],
  exports: [KafkaRoleInteractionsService],
})
export class KafkaRoleInteractionsModule {}
