import { Module } from "@nestjs/common";
import { GithubService } from "./github.service";

@Module({
  imports: [],
  controllers: [],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
