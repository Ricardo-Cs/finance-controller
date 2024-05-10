import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  name: "purchase_category_summary",
  expression: `SELECT "pc".id as "category_id", "pc".name, SUM("debit_purchase".amount) as "debit_amount_result", SUM("credit_purchase".amount) as "credit_amount_result", SUM("debit_purchase".amount + "credit_purchase".amount) as "total_amount" ,"debit_purchase".card_id_fk, "debit_purchase".user_id_fk
  FROM "purchase_category" as "pc"
    INNER JOIN "debit_purchase_categories_purchase_category" on "debit_purchase_categories_purchase_category"."purchaseCategoryId" = "pc".id
    INNER JOIN "debit_purchase" on "debit_purchase_categories_purchase_category"."debitPurchaseId" = "debit_purchase".id
    INNER JOIN "credit_purchase_categories_purchase_category" on "credit_purchase_categories_purchase_category"."purchaseCategoryId" = "pc".id
    INNER JOIN "credit_purchase" on "credit_purchase_categories_purchase_category"."creditPurchaseId" = "credit_purchase".id
  GROUP BY "pc"."name", "pc".id, "debit_purchase".card_id_fk, "debit_purchase".user_id_fk`,
})
export class PurchaseCategorySummary {
  @ViewColumn()
  card_id!: number;
}