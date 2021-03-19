import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  position: number;
  Data: string;
  Empresa: string;
  Categoria: string;
  Ref: string;
  Valor: number;
  Conta: string;
  Lancamento: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Data: '01/01/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 22.11,
    Conta: "Teste",
    Lancamento: "teste2",
  },
  {
    position: 2,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 11.11,
    Conta: "Teste",
    Lancamento: "teste3",
  },
  {
    position: 3,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 35.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 4,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 5,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste7",
  },
  {
    position: 6,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 7,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 8,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 9,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
  {
    position: 10,
    Data: '18/03/2021',
    Empresa: "13 PAGTO",
    Categoria: "SALÁRIOS ADMINISTRAÇÃO",
    Ref: "H",
    Valor: 111.11,
    Conta: "Teste",
    Lancamento: "teste1",
  },
];

/**
 * @title Table with selection
 */
@Component({
  selector: "table-selection-example",
  styleUrls: ["table-selection.css"],
  templateUrl: "table-selection.html",
})
export class TableSelectionE implements AfterViewInit {



  
  displayedColumns: string[] = [
    "select",   
    "Data",
    "Empresa",
    "Categoria",
    "Ref",
    "Valor",
    "Conta",
    "Lancamento",
  ];

 
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  


  constructor() {
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.Valor + 1
    }`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}


