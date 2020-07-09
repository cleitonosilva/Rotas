import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  Id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    //this.Id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.Id = params['id'];
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }
}
