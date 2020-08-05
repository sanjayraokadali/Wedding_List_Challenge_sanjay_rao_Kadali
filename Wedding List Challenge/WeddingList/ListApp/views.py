from django.shortcuts import render
from ListApp.models import GiftItemModel,ItemCount

# Create your views here.
def HomePage(request):

    return render(request,"ListApp/homepage.html")

def GiftItems(request):

    gift = GiftItemModel.objects.all()

    return render(request,"ListApp/giftitems.html",{'list':gift})

def GiftList(request):



    if request.method == 'POST':


        tea = int(request.POST.get('tea'))
        tea_id = 1

        casserole = int(request.POST.get('casserole'))
        casserole_id = 2

        gordon = int(request.POST.get('gordon'))
        gordon_id = 4

        ninespeed = int(request.POST.get('ninespeed'))
        ninespeed_id = 5

        mini = int(request.POST.get('mini'))
        mini_id = 6

        stand = int(request.POST.get('stand'))
        stand_id = 7

        blackstand = int(request.POST.get('blackstand'))
        blackstand_id = 8

        polka = int(request.POST.get('polka'))
        polka_id = 9

        paignton = int(request.POST.get('paignton'))
        paignton_id = 10

        kettle = int(request.POST.get('kettle'))
        kettle_id = 11

        count = [tea,casserole,gordon,ninespeed,mini,stand,blackstand,polka,paignton,kettle]
        item_id = [tea_id,casserole_id,gordon_id,ninespeed_id,mini_id,stand_id,blackstand_id,polka_id,paignton_id,kettle_id]


        for counter,id in zip(count,item_id):
            ItemCount.objects.create(count = counter, item_id = id)

        gift = GiftItemModel.objects.all()
        item_count = ItemCount.objects.all()


        return render(request,"ListApp/yourgiftlist.html",{'gift':gift, 'counter': item_count })


def Payment(request):

    if request.method == "POST":
        gift = GiftItemModel.objects.all()
        item = ItemCount.objects.all()

        return render(request,"ListApp/payment.html", {'gift': gift, 'list': item})

def ThankYou(request):

    if request.method == 'POST':

        ItemCount.objects.all().delete()

        return render(request,"ListApp/thankyou.html")


def StockList(request):

    gift = GiftItemModel.objects.all()

    return render(request,"ListApp/stocklist.html",{'list':gift})
