from django.conf.urls import url
from ListApp import views

app_name = 'ListApp'

urlpatterns = [

    url(r'^$',views.GiftItems,name='giftitems'),
    url(r'^StockList/$',views.StockList,name='stocklist'),
    url(r'^StockList/GiftList/$',views.GiftList,name='giftlist'),
    url(r'^StockList/GiftList/Payment/$',views.Payment,name='payment'),
    url(r'^StockList/GiftList/Payment/ThankYou$',views.ThankYou,name='thankyou')

]
