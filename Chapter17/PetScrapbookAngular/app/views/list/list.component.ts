import { Component, OnInit } from "@angular/core";
import { Page } from "../../models/page";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationOptions } from "nativescript-angular/router/ns-location-strategy";
import { ItemEventData } from "ui/list-view";
import { PageService } from "../../services/page.service";

@Component({
  selector: "list",
  providers: [ PageService ],
    templateUrl: "views/list/list.html"
})

export class ListComponent implements OnInit {
  public pages: Array<Page>;

  constructor(private routerExtensions: RouterExtensions, private pageService: PageService) {
  }

  ngOnInit(): void {
    this.pages = this.pageService.getPages();
  }

  onAddTap(): void {
      var options = <NavigationOptions>{
            clearHistory: true
      };
      this.routerExtensions.navigate(["detail", this.pages.length], options);
  }

    onItemTap(args: ItemEventData): void {
      let id = args.index;

      var options = <NavigationOptions>{
            clearHistory: true
      };
      this.routerExtensions.navigate(["detail", id], options);
    }
}