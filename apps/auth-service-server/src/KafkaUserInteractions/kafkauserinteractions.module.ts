import { Module } from "@nestjs/common";
import { KafkaUserInteractionsService } from "./kafkauserinteractions.service";
import { KafkaUserInteractionsController } from "./kafkauserinteractions.controller";
import { KafkaUserInteractionsResolver } from "./kafkauserinteractions.resolver";

@Module({
  controllers: [KafkaUserInteractionsController],
  providers: [KafkaUserInteractionsService, KafkaUserInteractionsResolver],
  exports: [KafkaUserInteractionsService],
})
export class KafkaUserInteractionsModule {}
