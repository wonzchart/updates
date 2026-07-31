function searchOrders(){

const username=document.getElementById("searchInput").value.trim();

document.getElementById("results").innerHTML=`

<div class="card">

<h2>${username}</h2>

<div class="label">
GO
</div>

<div class="value">
BOYNEXTDOOR HOME PHOTOBOOK
</div>

<div class="label">
Item
</div>

<div class="value">
POB (3) Keyring (2)
</div>

<div class="label">
Total
</div>

<div class="value">
RM23
</div>

<div class="label">
Status
</div>

<div class="badge">
Ready to Checkout
</div>

</div>

`;

}
